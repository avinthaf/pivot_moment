const Footer = () => {
    return (
        <>
            <footer className="flex flex-col md:flex-row gap-3 items-center justify-around w-full py-4 text-sm text-white/70" style={{ backgroundColor: 'color(display-p3 0.319 0.63 0.521)' }}>
                <p>Copyright 2026 Pivot Moment. All rights reserved.</p>
                <div className="flex items-center gap-4">
                    <a href="#" className="hover:text-white transition-all">
                        Contact Us
                    </a>
                    <div className="h-8 w-px bg-white/20"></div>
                    <a href="#" className="hover:text-white transition-all">
                        Privacy Policy
                    </a>
                    <div className="h-8 w-px bg-white/20"></div>
                    <a href="#" className="hover:text-white transition-all">
                        Trademark Policy
                    </a>
                </div>
            </footer>
        </>
    );
};

export default Footer;