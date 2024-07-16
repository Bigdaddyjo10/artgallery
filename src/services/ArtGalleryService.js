import { AppState } from "../AppState.js";
import { ArtWorks } from "../models/ArtWorks.js";
import Pop from "../utils/Pop.js";
import { api } from "./AxiosService.js";

class ArtGalleryService {

  async getPaintings() {
    const response = await api.get('api/artworks')
    console.log("👻", response.data);
    const artWork = response.data.artworks.map(infoOfArt => new ArtWorks(infoOfArt))
    console.log(artWork, '🖼️');
    AppState.artWorks = artWork
    AppState.currentPage = response.data.page
    Pop.success('WE GOT ART')
  }

  async loadMore(pageNumber) {
    const response = await api.get(`api/artworks?page=${pageNumber}`)
    const artWork = response.data.artworks.map(infoOfArt => new ArtWorks(infoOfArt))
    AppState.artWorks = artWork
    AppState.currentPage = response.data.page
  }
}
export const artGalleryService = new ArtGalleryService();

