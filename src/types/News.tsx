interface IMultimedia {
    url: string,
    format: string,
    caption: string
}

export type News = {
    title: string,
    abstract: string,
    url: string,
    uri: string,
    byline: string
    published_date: Date,
    multimedia: Array<IMultimedia>
}