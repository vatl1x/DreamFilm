type WithSkeletonProps<P> = P & {isLoading: boolean}

export const withSkeleton = <P extends object>(
    Component: React.ComponentType<P>,
    SkeletonComponent: React.ComponentType,
) => {
    return function WithSkeleton({isLoading, ...restProps}: WithSkeletonProps<P>) {

        if(isLoading) return <SkeletonComponent/>

        return <Component {...(restProps as P)} />
    };
};
