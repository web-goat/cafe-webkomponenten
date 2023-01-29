export interface Speisekarte {
    abschnitt: Speisekartenabschnitt[];
}

export interface Speisekartenabschnitt {
    headline: string;
    content: string;
    picture: string;
}