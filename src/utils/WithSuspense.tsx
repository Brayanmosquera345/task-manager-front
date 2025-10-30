import { Suspense } from "react";
import { Loader } from "lucide-react";

export function withSuspense<T extends React.ComponentType<any>>(Component: T) {
  type Props = React.ComponentProps<T>;

  return function SuspendedComponent(props: Props) {
    return (
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen bg-secondary ">
            <Loader className="w-10 h-10 animate-spin text-background" />
          </div>
        }
      >
        <Component {...props} />
      </Suspense>
    );
  };
}
