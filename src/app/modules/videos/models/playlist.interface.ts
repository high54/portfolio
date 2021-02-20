import { Item } from './video.interface';

export interface Playlist {
    id: number;
    title: string;
    url: string;
    subtitle: string;
    description: string;
    img: string;
    videos: Item[];
}
