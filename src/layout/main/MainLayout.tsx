import { ReactNode } from "react";
import { MainHeader } from "./Header";
import { MainContent } from "./MainLayout.style";

export function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div className="w-full h-full flex flex-col overflow-hidden">
            <MainHeader />
            <MainContent>
                {
                    children
                }
            </MainContent>
        </div>
    )
}