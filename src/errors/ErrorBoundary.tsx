import { Component, ErrorInfo, ReactNode } from "react";
import Fallback from "./Fallback";

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error): ErrorBoundaryState {

        console.error("Error caught by error boundary: ", _);

        // Update state to indicate an error has occurred
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // You can log the error to an error tracking service like Sentry here
        console.error("Error caught by error boundary:", error, errorInfo);
    }

    render(): ReactNode {
        if (this.state.hasError) {
            // You can customize the error message displayed to the user here
            return <Fallback error={null} errorInfo={null} />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
