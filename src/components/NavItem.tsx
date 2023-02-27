import Link from 'next/link'
import { useRouter } from 'next/router'

export const NavItem = ({ pageName }: { pageName: string }) => {
  const router = useRouter()

  const adjustedPageName = pageName === 'home' ? '' : `${pageName}`

  const pageLink = `/${adjustedPageName}`

  const isActive = router.pathname === pageLink
  return (
    <li
      className={`text-almost-black dark:text-white transition-all border-2 border-transparent hover:border-almost-black dark:hover:border-gray-200 rounded-2xl ${
        isActive && 'border-black dark:border-white'
      }`}
    >
      <Link href={pageLink} passHref>
        <p className="px-3 py-2 sm:px-4 sm:py-2 cursor-pointer text-sm md:text-base">
          {pageName}
        </p>
      </Link>
    </li>
  )
}

export default NavItem