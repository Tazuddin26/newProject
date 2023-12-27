import {IonButton, IonButtons, IonIcon,} from "@ionic/react";
import {personOutline, personSharp } from "ionicons/icons";
import LoginSignup from "./loginSignup";
const NavigationBar = () => {
    return (
        <nav>
            <div className="w-screen h-screen">
                <div className="w-full h-[10%] text-white bg-gray-800 flex justify-end gap-2 p-2">
                    <p className="text-xl mt-4 ml-6">Welcome,
                        <span className="m-3 text-yellow-300 hover:text-white hover:underline cursor-pointer" >Guest</span>
                    </p>
                    <IonIcon icon={personSharp} className="mt-4 text-3xl text-black mr-4 border rounded-full bg-white"></IonIcon>
                </div>
                <LoginSignup/>
            </div>
        </nav>
    )
};
export default NavigationBar;