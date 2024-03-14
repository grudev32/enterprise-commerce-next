import { HeartIcon } from "components/Icons/HeartIcon"
import { cookies } from "next/headers"
import { cn } from "utils/cn"
import { COOKIE_FAVORITES } from "constants/index"

export function FavoriteMarker({ handle }: { handle: string }) {
  const favorites = getParsedFavoritesHandles()
  const isActive = favorites.some((favoriteHandle) => favoriteHandle === handle)

  async function toggleFavoriteProduct(handle: string) {
    "use server"

    const handles = getParsedFavoritesHandles()
    const newFavorites = handles.includes(handle) ? handles.filter((i) => i !== handle) : [...handles, handle]
    cookies().set(COOKIE_FAVORITES, JSON.stringify(newFavorites))
  }

  return (
    <div className="absolute inset-4">
      <form>
        <button type="submit" formAction={toggleFavoriteProduct.bind(null, handle)}>
          <HeartIcon className={cn("size-8 cursor-pointer transition-colors hover:fill-neutral-400", { "fill-black": isActive })} />
        </button>
      </form>
    </div>
  )
}

function getParsedFavoritesHandles() {
  const favoritesCookie = cookies().get(COOKIE_FAVORITES)?.value || "[]"
  const favoritesHandles = JSON.parse(favoritesCookie) as string[]
  return favoritesHandles
}