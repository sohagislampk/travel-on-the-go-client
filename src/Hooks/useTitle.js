import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Travel On The Go`
    }, [title])
}

export default useTitle;