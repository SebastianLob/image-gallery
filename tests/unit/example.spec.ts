import {shallowMount} from '@vue/test-utils'
import Sharebutton from '../../src/components/Share-button.vue'

describe('Test component Share-button', () => {
  it('renders props.pictureURL when passed', () => {
    const url = 'somePictureUrl';
    const wrapper = shallowMount(Sharebutton, {
      propsData: {pictureUrl: url},
      stubs: ['v-btn', 'v-icon']
    })
    expect(wrapper.find("#icon-share").exists()).toBeTruthy()
  })
});