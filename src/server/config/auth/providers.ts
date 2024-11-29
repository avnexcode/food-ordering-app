// import { type Provider } from "next-auth/providers";
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import DiscordProvider from 'next-auth/providers/discord';
import FacebookProvider from 'next-auth/providers/facebook';
import CredentialsProvider from 'next-auth/providers/credentials';
import { authService } from '@/server/features/auth/auth.service';
import { BadRequestException } from '@/server/lib/error.exception';
import { env } from '@/env';
import { type NextAuthConfig } from 'next-auth';

export const providers: NextAuthConfig['providers'] = [
    // : optional type Provider[]
    GoogleProvider({
        clientId: env.GOOGLE_CLIENT_ID,
        clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
        clientId: env.GITHUB_CLIENT_ID,
        clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
    DiscordProvider({
        clientId: env.DISCORD_CLIENT_ID,
        clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    FacebookProvider({
        clientId: env.FACEBOOK_CLIENT_ID,
        clientSecret: env.FACEBOOK_CLIENT_SECRET,
    }),
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
            email: { label: 'Email', type: 'text', placeholder: 'email' },
            password: {
                label: 'Password',
                type: 'password',
                placeholder: '********',
            },
        },
        async authorize(credentials, req) {
            if (!credentials?.email || !credentials.password) {
                throw new Error('Email and password are required');
            }

            const { email, password } = credentials as {
                email: string;
                password: string;
            };

            const user = await authService.login({ email, password });

            if (user) return user;

            throw new BadRequestException('Email or password is invalid');
        },
    }),
];
