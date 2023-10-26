
const SectionTitle = ({title}) => {
  return (
    <div className="flex justify-between items-center">
        <h3 className="text-start font-[Roboto] text-3xl font-semibold text-[#302F2F]">{title}</h3>
        <div className="h-[2px] w-[84%] border-t-2 borer-[#D3D3D3]"></div>
        <div className="h-[89px] w-[89px] ">
            <svg xmlns="http://www.w3.org/2000/svg" width="103" height="103" viewBox="0 0 103 103" fill="none">
                <circle cx="51.4997" cy="51.5" r="43" transform="rotate(-9.48737 51.4997 51.5)" stroke="#D3D3D3" strokeWidth="3"/>
                <path d="M7.85547 60.3144L40.4041 54.875" stroke="#D3D3D3" strokeWidth="3"/>
                <path d="M63.0898 51.084L95.6385 45.6446" stroke="#D3D3D3" strokeWidth="3"/>
                <circle cx="52.2392" cy="52.8971" r="12.5" transform="rotate(-9.48737 52.2392 52.8971)" stroke="#D3D3D3" strokeWidth="3"/>
                <circle cx="52.2405" cy="52.8971" r="6.5" transform="rotate(-9.48737 52.2405 52.8971)" stroke="#D3D3D3" strokeWidth="3"/>
            </svg>
        </div>
    </div> 
  )
}

export default SectionTitle
