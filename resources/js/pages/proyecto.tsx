import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'proyecto xd',
        href: '/proyecto',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {/* Tarjeta con tabla */}
                    <div className="relative overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-4 bg-white dark:bg-neutral-900">
                        <h2 className="font-bold mb-2">Usuarios</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-neutral-100 dark:bg-neutral-800">
                                        <th className="p-2 border">ID</th>
                                        <th className="p-2 border">Nombre</th>
                                        <th className="p-2 border">Rol</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-2 border">1</td>
                                        <td className="p-2 border">Juan Pérez</td>
                                        <td className="p-2 border">Admin</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border">2</td>
                                        <td className="p-2 border">María López</td>
                                        <td className="p-2 border">Usuario</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Otra tarjeta con tabla */}
                    <div className="relative overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-4 bg-white dark:bg-neutral-900">
                        <h2 className="font-bold mb-2">Proyectos</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-neutral-100 dark:bg-neutral-800">
                                        <th className="p-2 border">ID</th>
                                        <th className="p-2 border">Nombre</th>
                                        <th className="p-2 border">Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-2 border">101</td>
                                        <td className="p-2 border">Sistema IoT</td>
                                        <td className="p-2 border">Activo</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border">102</td>
                                        <td className="p-2 border">Web Corporativa</td>
                                        <td className="p-2 border">En Progreso</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* La tercera tarjeta puede quedar como placeholder */}
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-neutral-100 dark:bg-neutral-800">
                                        <th className="p-2 border">ID</th>
                                        <th className="p-2 border">Nombre</th>
                                        <th className="p-2 border">Rol</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-2 border">1</td>
                                        <td className="p-2 border">Juan Pérez</td>
                                        <td className="p-2 border">Admin</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border">114</td>
                                        <td className="p-2 border">María López</td>
                                        <td className="p-2 border">Usuario</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Parte inferior con una tabla grande */}
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border p-4 bg-white dark:bg-neutral-900">
                    <h2 className="font-bold mb-4">Reporte General</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr>
                                        <td className="p-2 border">114</td>
                                        <td className="p-2 border">María López</td>
                                        <td className="p-2 border">Usuario</td>
                                    </tr>
                            </thead>
                            <tbody>
                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
