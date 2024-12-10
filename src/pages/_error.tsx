import { type NextPageContext } from 'next';
import Link from 'next/link';

const ErrorPage = ({ statusCode }: { statusCode: number }) => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>
                {statusCode ? `Kesalahan ${statusCode}` : 'Terjadi Kesalahan'}
            </h1>
            <p>
                {statusCode === 404
                    ? 'Halaman yang Anda cari tidak ditemukan.'
                    : 'Ada sesuatu yang salah di server kami.'}
            </p>
            <Link href="/" style={{ color: 'blue' }}>
                Kembali ke Beranda
            </Link>
        </div>
    );
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
    const statusCode = res?.statusCode ?? (err ? 500 : 404);
    return { statusCode };
};

export default ErrorPage;
