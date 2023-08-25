
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="font-body">
            <div className="footer p-10 bg-deepColor text-base-content">
                <div>
                    <p className="text-xl font-semibold"><span className="text-[#FF4667] font-bold">e</span><span className="text-white font-bold">Speak</span><br /><span className="text-[16px] text-white">Providing reliable service since 2010</span></p>
                </div>
                <div>
                    <span className="footer-title text-white">Services</span>
                    <a className="link text-white link-hover">Branding</a>
                    <a className="link text-white link-hover">Design</a>
                    <a className="link text-white link-hover">Marketing</a>
                    <a className="link text-white link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title text-white">Company</span>
                    <a className="link text-white link-hover">About us</a>
                    <a className="link text-white link-hover">Contact</a>
                    <a className="link text-white link-hover">Jobs</a>
                    <a className="link text-white link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title text-white">Legal</span>
                    <a className="link text-white link-hover">Terms of use</a>
                    <a className="link text-white link-hover">Privacy policy</a>
                    <a className="link text-white link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title text-white">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer footer-center p-4 bg-deepColor text-base-content">
                <div>
                    <p className="font-semibold text-white">Copyright © {year} - All right reserved by eSpeak</p>
                </div>
            </footer>
        </footer>
    );
};

export default Footer;