export default function Create() {
    return (
        <div>
            <h1>Create</h1>
            <form action="/api/main" method="post" encType="multipart/form-data">
                <input type="file" name="file" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}