import Icon from 'react-native-vector-icons/Ionicons';
import HeaderButtons, { HeaderButton, Item } from 'react-navigation-header-buttons';

const IoniconsHeaderButton = passMeFurther => (
  // the `passMeFurther` variable here contains props from <Item .../> as well as <HeaderButtons ... />
  // and it is important to pass those props to `HeaderButton`
  // then you may add some information like icon size or color (if you use icons)
  <HeaderButton {...passMeFurther} IconComponent={Ionicons} iconSize={23} color="blue" />
);

static navigationOptions = {
  title: 'Vector Icons',
  headerRight: (
    <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
      {/* use Item or HeaderButtons.Item */}
      <Item title="search" iconName="ios-search" onPress={() => alert('search')} />
      <HeaderButtons.Item title="select" onPress={() => alert('select')} />
    </HeaderButtons>
  ),
};