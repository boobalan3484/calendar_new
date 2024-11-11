'use client'
import { usePathname } from 'next/navigation'

const Reusable = ({ one, two, three }) => {

    const pathname = usePathname();

    const route_config = {
        '/': one,
        '/weekly-calendar': two,
        '/monthly-calendar': three,
    }

    const Component = route_config[pathname] || three;

    return Component
}

export default Reusable