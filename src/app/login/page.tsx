import { FooterComponent } from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import HeroLogin from "@/components/akun/HeroLogin";

export default function page() {
    return (
        <>
        <HeaderComponent />
            <HeroLogin />
            <FooterComponent />
        </>
    );
};
