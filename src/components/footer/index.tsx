const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-[#6F4E37] py-6">
            <div className="container mx-auto text-center text-white">
                <p>&copy; {year} KahawaStreet. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer