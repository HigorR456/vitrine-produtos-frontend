import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function ProductsLoading() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 p-4 bg-white rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center space-x-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-10 w-[180px]" />
          </div>

          <div className="flex items-center space-x-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-[140px]" />
            <Skeleton className="h-10 w-[100px]" />
          </div>
        </div>

        <Skeleton className="h-4 w-32" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {Array.from({ length: 12 }).map((_, i) => (
          <Card key={i}>
            <CardContent className="p-4">
              <Skeleton className="aspect-square mb-4 rounded-md" />
              <Skeleton className="h-4 mb-2" />
              <Skeleton className="h-4 w-2/3 mb-2" />
              <div className="flex items-center justify-between">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-5 w-12" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex items-center justify-center space-x-2">
        <Skeleton className="h-9 w-20" />
        <Skeleton className="h-9 w-8" />
        <Skeleton className="h-9 w-8" />
        <Skeleton className="h-9 w-8" />
        <Skeleton className="h-9 w-20" />
      </div>
    </div>
  )
}
