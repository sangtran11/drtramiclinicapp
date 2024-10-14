import { Container, rem, Grid, Image } from "@mantine/core";
import { CustomTitleSection } from "@/components";
import { clinicOfficeImagesList } from "@/constants";

// const useStyles = createStyles((theme) => ({
//   gridContainer: {
//     animation: 'fadeIn 1s scaleIn 0s',
//     '-webkit-column-count': 3,
//     '-moz-column-count': 3,
//     columnCount: 3,
//     '-webkit-column-width': 'auto',
//     '-moz-column-width': 'auto',
//     columnWidth: 'auto',
//     padding: `${rem(20)} ${rem(20)}`,
//     margin: '20px 0',
//     position: 'relative',
//     gap: rem(20),
//     [theme.fn.smallerThan('md')]: {
//       '-webkit-column-count': 1,
//       '-moz-column-count': 1,
//       columnCount: 1,
//       '-webkit-column-width': '100%',
//       '-moz-column-width': '100%',
//       columnWidth: '100%',
//     },
//   },
//   imgWrap: {
//     padding: `${rem(20)} 0`,
//     transition: 'all 0.5s ease',
//     '-webkit-transition': 'all 0.5s ease',
//   }
// }));

const ClinicOfficeImagesList = ({ titleSection = "hình ảnh phòng khám" }) => {
  return (
    <Container fluid mb={rem(60)} px={{ sm: rem(16), lg: rem(40) }}>
      <CustomTitleSection title={titleSection} />
      <Grid>
        {clinicOfficeImagesList.map((item, index) => (
          <Grid.Col sm={12} md={6} lg={4} key={index}>
            <Image
              width={"auto"}
              height={"auto"}
              radius="md"
              src={`/images/logo_hinh_phong_kham/${item}.jpg`}
              alt={item}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default ClinicOfficeImagesList;
