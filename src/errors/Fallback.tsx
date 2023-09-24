import "./Fallback.scss";

import React from "react";

interface FallbackProps {
    error: Error | null;
    errorInfo: React.ErrorInfo | null;
}

function Fallback({ error, errorInfo }: FallbackProps): React.ReactNode {

    console.log("Error caught by error boundary:", error, errorInfo)

    return (
        <div>
            <h1>Something went wrong</h1>
            <p>We apologize for the inconvenience.</p>
            {error && <p>Error: {error.message}</p>}
            {errorInfo && (
                <details style={{ whiteSpace: "pre-wrap" }}>
                    {errorInfo.componentStack}
                </details>
            )}
        </div>
    );
}

export default Fallback;
