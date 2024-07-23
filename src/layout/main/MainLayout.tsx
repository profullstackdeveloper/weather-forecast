import { ReactNode } from "react";
import { MainHeader } from "./Header";
import { Container, MainContent } from "./MainLayout.style";

export function MainLayout({ children }: { children: ReactNode }) {
    return (
        <Container>
            <MainHeader />
            <MainContent>
                {
                    children
                }
            </MainContent>
        </Container>
    )
}