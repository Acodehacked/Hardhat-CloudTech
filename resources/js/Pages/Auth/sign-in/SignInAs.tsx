import GuestHome from "@/Layouts/GuestHomeLayout";
import { Container } from "@mui/material";

export default function index() {
    return <GuestHome>
        <Container
            maxWidth='xl'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                pt: { xs: 10, sm: 12 },
                pb: { xs: 8, sm: 12 },
            }}
        >
            <div className="flex flex-col w-full">
                <h4 className="text-foreground text-xl">Welcome back</h4>
                <p className="text-secondary-foreground/50">Simplifying Construction Project Management</p>

                <div className="mt-5 flex flex-col w-full bg-secondary p-3">
                    <span className="text-head">Login</span>
                    <span className="text-secondary-foreground/50 text-md">(Please select your role to continue)</span>
                </div>
                div.grid.grid-cols
            </div>
        </Container>
    </GuestHome>
}