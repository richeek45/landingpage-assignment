import {
  Card,
  CardContent,
  CardHeader
} from "@/components/ui/card";
import Arrow from "../svg/arrow.svg?react";
import ThreeArrow from "../svg/threearrow.svg?react";


const SpaceCard = ({ text, image }: { text: string, image: string }) => {

  return (<Card className="flex flex-col gap-1 drop-shadow-md w-[30%]">
    <CardHeader className="flex flex-row gap-10 p-2">
      <h3 className="text-md font-medium">{text}</h3> 
      <div className="rounded border bg-slate-200 py-2 px-2 flex flex-col items-center gap-2 w-[20%]">
        <Arrow/> <p className="text-[12px]">6 kms</p>
      </div>
    </CardHeader>
    <CardContent className="p-2 w-full">
      <img src={image} alt="co working space 1" className="object-cover w-full" />

      <div className="flex justify-between gap-2 mt-2">
        <div className="rounded border flex justify-between items-center p-1 w-full my-2 bg-gray-100">
          <div>
            <p className="text-slate-600 text-[16px]">Day Pass</p>
            <span className="font-semibold">₹ 249 </span><span className="text-slate-500 text-[12px]">/Day</span>
          </div>
          <ThreeArrow />
        </div>
      
        <div className="rounded border flex justify-between items-center p-1 w-full my-2 bg-amber-300 relative">
          <p className="bg-black text-slate-50 text-[12px] p-0 -top-2 left-1/3 absolute">
            20% Discount
          </p>
          <div>
            <p className="text-slate-600 text-[16px]">Bulk Pass</p>
            <span className="font-semibold">₹ 2400 </span><span className="text-slate-500 text-[12px]">/10 Days</span>
          </div>
          <ThreeArrow />
        </div>
      </div>
    </CardContent>
  </Card>
  )
}

export default SpaceCard;