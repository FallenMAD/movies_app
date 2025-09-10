import type { AppRoute } from '../types/AppRoute.interface'
import { RoutePaths } from '../types/AppRouterPaths.enum'

export const appRoutes: AppRoute[] = [
  {
    path: RoutePaths.HOME,
    name: 'home',
    title: 'Home',
    subtitle: 'Playing now',
    icon: 'mdi-play-circle-outline',
  },
  {
    path: RoutePaths.POPULAR,
    name: 'popular',
    title: 'Popular',
    subtitle: 'Most popular content',
    icon: 'mdi-fire',
  },
  {
    path: RoutePaths.TOP_RATED,
    name: 'top-rated',
    title: 'Top Rated',
    subtitle: 'Top rated content',
    icon: 'mdi-star',
  },
  {
    path: RoutePaths.UPCOMING,
    name: 'upcoming',
    title: 'Upcoming',
    subtitle: 'Upcoming content',
    icon: 'mdi-calendar',
  },
]
