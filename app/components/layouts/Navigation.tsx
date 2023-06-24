"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { UserButton } from "@clerk/nextjs";

export default function Navigation() {
  return (
    <NavigationMenu className="border-solid">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>

          <NavigationMenuContent>
            <NavigationMenuLink className="p-6">Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <UserButton afterSignOutUrl="/" />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
