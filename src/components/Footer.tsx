const Footer = () => {
    return (
        <>
            <footer className="flex flex-col md:flex-row gap-3 items-center justify-around w-full py-4 text-sm">
                <p>Copyright 2026 Pivot Moment. All rights reserved.</p>
                <div className="flex items-center gap-4">
                    <a href="#" className="transition-all">
                        Contact Us
                    </a>
                    <div className="h-8 w-px bg-white/20"></div>
                    <a href="#" className="transition-all">
                        Privacy Policy
                    </a>
                    <div className="h-8 w-px bg-white/20"></div>
                    <a href="#" className="transition-all">
                        Trademark Policy
                    </a>
                </div>
            </footer>
        </>
    );
};

export default Footer;