import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Button } from './ui/button'
import { Home, Mail, List } from 'lucide-react'
import Logo from './Logo'

const Navigation = () => {
  const location = useLocation()
  const isAuthenticated = false // TODO: Replace with actual auth state

  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <Button variant="ghost" className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    Home
                  </Button>
                </Link>
              </NavigationMenuItem>
              
              {isAuthenticated && (
                <NavigationMenuItem>
                  <Link to="/dashboard">
                    <Button variant="ghost" className="flex items-center gap-2">
                      <List className="h-4 w-4" />
                      Lists
                    </Button>
                  </Link>
                </NavigationMenuItem>
              )}
              
              <NavigationMenuItem>
                <Link to="/contact">
                  <Button variant="ghost" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Contact
                  </Button>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div>
            {!isAuthenticated ? (
              <Button asChild variant="outline">
                <Link to="/auth">Sign In</Link>
              </Button>
            ) : (
              <Button variant="outline" onClick={() => {}}>
                Sign Out
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navigation