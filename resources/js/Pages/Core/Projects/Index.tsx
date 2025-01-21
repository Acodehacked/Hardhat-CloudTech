import Header from "@/Layouts/components/Header"
import DashboardLayout from "@/Layouts/DashboardLayout"
import { PageProps, Project } from "@/types"

export default function index({projects}:PageProps<{projects:Project[]}>){
    return <DashboardLayout projects={projects}>
        <Header title="Projects" links={['Core Tools','Projects']} />
        <main>
            
        </main>
    </DashboardLayout>
}