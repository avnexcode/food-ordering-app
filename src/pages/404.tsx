import Link from 'next/link';

const ErrorNotFound = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404 - Halaman Tidak Ditemukan</h1>
            <p>Maaf, halaman yang Anda cari tidak ada.</p>
            <Link href="/" style={{ color: 'blue' }}>
                Kembali ke Beranda
            </Link>
        </div>
    );
};

export default ErrorNotFound;
