import { colors } from '../../../assets/colors/colors';
import { TabBarLabelParams } from '../../types/TabBarLabelParams';
import Typography from '../typography/Typography';

const TabBarLabel = ({focused, name}: TabBarLabelParams) => (
  <Typography
    fontWeight={500}
    size={11}
    color={focused ? colors.primary[120] : colors.grey[60]}>
    {name}
  </Typography>
);

export default TabBarLabel;
