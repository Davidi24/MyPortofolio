import "../style/EntryPage.css"
import { footerIcons } from "../data/IconData"

function Footer() {
    return (
        <div>
            <div className='h-[2.2px] w-full line'></div>
            <div className="w-full  mt-8 flex flex-col justify-center items-center">
                <div className="flex gap-5">
                    {footerIcons.map((item, index) => (
                        <div className="box p-2 shadow-black shadow-three text-[#d3cbcb] cursor-pointer" key={index}>
                            {item}
                        </div>
                    ))}
                </div>
                <div className="mt-4 text-[13px] font-lato text-[#d3cbcb]">© 2024 David. All rights reserved.</div>
            </div>
        </div>
    )
}

export default Footer