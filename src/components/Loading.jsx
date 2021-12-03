import { ClipLoader } from "react-spinners";

export default function Loading() {
    return <ClipLoader />;
}

export function CenterLoading() {
    return (
        <div className="flex items-center justify-center">
            <Loading />
        </div>
    );
}
