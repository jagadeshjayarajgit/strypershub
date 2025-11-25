import Header from "../ui/Header";
export default function StrypershubLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen bg-[#14141F] text-white font-sans selection:bg-green-900 selection:text-white overflow-x-hidden">
            <Header />
            <main className="container mx-auto px-6 pt-12 pb-20">
                {children}
            </main>
        </div>
    );
}

