import { mount } from '@vue/test-utils';
import Hello from '../components/Hello.vue';

describe('import vue components', () => {
  test('normal imports as expected', async () => {
    const wrapper = mount(Hello);
    console.log(wrapper.html(), '===');
    expect(wrapper.find('.hello > .item').exists()).toBe(true);
  });
});
