import { AppState } from "../AppState.js";
import { ArtWorks } from "../models/ArtWorks.js";
import Pop from "../utils/Pop.js";
import { api } from "./AxiosService.js";

class ArtGalleryService {
  async getArtById(artId) {
    const response = await api.get(`api/artworks/${artId}`)
    console.log(response.data, '⏰');

    const art = new ArtWorks(response.data)
    AppState.activeArt = art
  }


  async getPaintings() {
    const response = await api.get('api/artworks')
    console.log("👻", response.data);
    const artWork = response.data.artworks.map(infoOfArt => new ArtWorks(infoOfArt))
    console.log(artWork, '🖼️');
    AppState.artWorks = artWork
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.pages

  }

  async loadMore(pageNumber) {
    const response = await api.get(`api/artworks?page=${pageNumber}`)
    const artWork = response.data.artworks.map(infoOfArt => new ArtWorks(infoOfArt))
    AppState.artWorks = artWork
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.pages
  }
}
export const artGalleryService = new ArtGalleryService();

