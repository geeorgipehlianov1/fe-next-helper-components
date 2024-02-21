'use client'
import { useState } from "react";
import { Step, Stepper } from "@material-tailwind/react";
import Image from "next/image";

 
export default function Page()
{
    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(false);
 
    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
 
    return (
        <div className="py-2 px-8">
            <Stepper
                lineClassName='hidden'
                className="mb-1"
                color="[#1DA1F2]"
                placeholder={"Open Drawer Bottom"}
                activeStep={activeStep}
                isLastStep={(value) => setIsLastStep(value)}
                isFirstStep={(value) => setIsFirstStep(value)}
            >
                <Step activeClassName="bg-[#1DA1F2]" completedClassName="bg-[#1DA1F2]" className="bg-[#1DA1F2] rounded-[7px] w-[56px] h-2" placeholder={"Open Drawer Bottom"} onClick={() => setActiveStep(0)} />
                <Step activeClassName="bg-[#1DA1F2]" completedClassName="bg-[#1DA1F2]" className="bg-[#2C2D2E] rounded-[7px] w-[56px] h-2" placeholder={"Open Drawer Bottom"} onClick={() => setActiveStep(1)}></Step>
                <Step activeClassName="bg-[#1DA1F2]" completedClassName="bg-[#1DA1F2]" className="bg-[#2C2D2E] rounded-[7px] w-[56px] h-2" placeholder={"Open Drawer Bottom"} onClick={() => setActiveStep(2)}></Step>
                <Step activeClassName="bg-[#1DA1F2]" completedClassName="bg-[#1DA1F2]" className="bg-[#2C2D2E] rounded-[7px] w-[56px] h-2" placeholder={"Open Drawer Bottom"} onClick={() => setActiveStep(3)}></Step>
                <Step activeClassName="bg-[#1DA1F2]" completedClassName="bg-[#1DA1F2]" className="bg-[#2C2D2E] rounded-[7px] w-[56px] h-2" placeholder={"Open Drawer Bottom"} onClick={() => setActiveStep(4)}></Step>
            </Stepper>
            <div className="mt-8 flex content-center justify-between">
                <button className="z-10 flex items-center bg-[#222225] justify-center relative left-[-20px] rounded-full w-11 h-11 border-[1px] border-[#2C2D2E]" onClick={handlePrev} disabled={isFirstStep}>
                    <Image src='/Icon-24px.png' width={24} height={24} alt="previous" />
                </button>
                <button className={`${activeStep === 4 && 'hidden'} z-10 bg-[#222225] justify-center relative right-[-20px] rounded-full w-11 h-11 border-[1px] border-[#2C2D2E]
        `} onClick={handleNext} disabled={isLastStep}>
                    <Image src='/right-arrow.png' width={24} height={24} alt="next" />
                </button>
            </div>
            {activeStep == 0 && <Image className="relative top-[-10px] opacity 0.5s ease-in-out" src='/first.png' width={334} height={274} alt="some" />}
            {activeStep == 1 && <Image className="relative top-[-10px] opacity 0.5s ease-in-out" src='/image38.png' width={334} height={274} alt="some" />}
            {activeStep == 2 && <Image className="relative top-[-10px] opacity 0.5s ease-in-out" src='/third.png' width={334} height={274} alt="some" />}
            {activeStep == 3 && <Image className="relative top-[-10px] opacity 0.5s ease-in-out" src='/forth.png' width={334} height={274} alt="some" />}
            {activeStep == 4 && <Image className="relative top-[-10px] opacity 0.5s ease-in-out" src='/fifth.png' width={334} height={274} alt="some" />}
        </div>
    );
}
