import { Button } from './components/owned/button/button';
import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "tgdPEKAb7CK8dgvRB6vUh3",  // ID of a project you are using
      token: "VkXgF1CfHXBLdvryjh6fenyMYCAzmWEqWDESgUg4CGu4yafD7Iq7LbvSPwDBnNILAIR2Hey8TKKvqgEARJg"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})

PLASMIC.registerComponent(Button, {
  name: 'ButtonML',
  props: {
    // productId: 'string',
    // numPhotos: 'number'
  }
});