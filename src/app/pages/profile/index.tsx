import { MainLayout } from "@/components/layout/MainLayout"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useSession } from "next-auth/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

export const ProfilePage = () => {
    const { data: session } = useSession()

    const [store, setStore] = useState<boolean>(false)

    return (
        <div className="p-4 min-h-screen">
            <header className="relative">
                <div className={`flex px-12 py-5 mb-2 justify-center gap-20 border-b-2 border-black ${!store && "opacity-75 blur-xl"}`}>
                    <Avatar className="w-32 h-32">
                        <AvatarImage src="https://placehold.co/400x400" alt={session?.user.name} />
                        <AvatarFallback>{session?.user.name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-5 items-center justify-center">
                        <span className="text-5xl font-bold uppercase">Toko bukan toko tapi yoga open BO</span>
                        <span className="italic">disini yoga melayani dengan penuh semangat dan penuh gairah</span>
                    </div>
                </div>
                <Button className={`absolute top-10 right-32 ${store && "hidden"}`} onClick={() => setStore((prev) => !prev)}>Buat Toko Anda</Button>
            </header>

            <div className="flex gap-4">
                <div className="w-1/2 px-12">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl capitalize text-center">
                                {session?.user.name}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center gap-4">
                            <Avatar className="w-28 h-28">
                                <AvatarImage src="https://placehold.co/400x400" alt={session?.user.name} />
                                <AvatarFallback>{session?.user.name?.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <Button variant="outline" size="sm">
                                Upload Foto
                            </Button>
                        </CardContent>
                    </Card>

                    <div className="flex flex-col gap-4 mt-4">
                        <Input placeholder="Enter your name" />
                        <Input placeholder="Enter your email" />
                        <Input placeholder="Enter your address" />
                    </div>

                    <div className="flex justify-end mt-4">
                        <Button>Simpan</Button>
                    </div>
                </div>

                <div className="w-1/2">
                    <Card className="h-full">
                        <CardHeader className="border-b-2">
                            <CardTitle className="flex justify-between items-center text-2xl capitalize text-center mb-10 px-6">
                                <span>Alamat</span>
                                <Button>Buat Alamat Baru</Button>
                            </CardTitle>
                            <CardContent>
                                <div className="flex justify-center items-center gap-4">
                                    <span>{session?.user.name}</span>
                                    <span className="block h-4 border border-black"></span>
                                    <span>{session?.user.email}</span>
                                    <span className="block h-4 border border-black"></span>
                                    <Button>USE</Button>
                                </div>
                                <CardDescription className="mt-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ratione non, necessitatibus tempora tempore quasi esse, voluptatum reprehenderit, praesentium nemo aliquid? Corporis sit delectus maxime minima obcaecati distinctio voluptatum cumque quam tempora, sapiente hic temporibus consequatur, nulla, quisquam repudiandae officia?
                                </CardDescription>
                            </CardContent>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </div>
    )
}

ProfilePage.getLayout = (page: React.ReactElement) => {
    return <MainLayout>{page}</MainLayout>
}