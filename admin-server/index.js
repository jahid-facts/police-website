const express = require('express')
const app = express()
// const bodyParser = require('body-parser')
const cors = require('cors');
app.use(cors());
const port = 4000
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

const newsRouter = require('./routes/news.route');
const topSliderRouter = require('./routes/topSlider.route');
const topBannerRouter = require('./routes/topBanner.route');
const bottomNewsRouter = require('./routes/newsBottom.route');
const recentActivityRouter = require('./routes/recentActivity.route');
const activitySliderRouter = require('./routes/activitySlider.route');
const workDocumentSectionRouter = require('./routes/workDocumentSection.route');
const workRouter = require('./routes/work.route');
const imageGalleryRouter = require('./routes/imageGallery.route');
const VideoGalleryRouter = require('./routes/videoGallery.route');
const footerHeadingRouter = require('./routes/footerHeading.route');
const footerDataRouter = require('./routes/footerData.route');
const zillaPolicePagesRouter = require('./routes/zillaPolicePages.route');
const zillaPoliceSubPagesRouter = require('./routes/zillaPoliceSubPages.route');
const administrationPagesRouter = require('./routes/administrationPages.route');
const administrationSubPagesRouter = require('./routes/administrationSubPages.route');
const employeesRouter = require('./routes/employees.route');
const officersRouter = require('./routes/officers.route');
const exSpRouter = require('./routes/exSp.route');
const unitsRouter = require('./routes/units.route');
const subUnitsRouter = require('./routes/subUnits.route');
const forcesRouter = require('./routes/forces.route');
const activitiesPagesRouter = require('./routes/activitesPages.route');
const activitiesSubPagesRouter = require('./routes/activitesSubPages.route');
const servicesPagesRouter = require('./routes/servicesPages.route');
const servicesSubPagesRouter = require('./routes/servicesSubPages.route');
const noticeRouter = require('./routes/notice.route');
const bitPoliceRouter = require('./routes/bitPolicePages.route');
const thanaRouter = require('./routes/thana.route');
const bitOfficersRouter = require('./routes/bitOfficers.route');
const phoneDirectoryRouter = require('./routes/phoneDirectory.route');
const crimePageRouter = require('./routes/crimePages.route');
const policeSuperRouter = require('./routes/policeSuper.route');
const digRouter = require('./routes/dig.route');
const authRouter = require('./routes/auth.route');
const bitNewsRouter = require('./routes/bitNews.route');
const rolesRouter = require('./routes/roles.route');
const footerBrandingRouter = require('./routes/footerBranding.route');
const emailRouter = require('./routes/email.route');
const exForceRouter = require('./routes/exForces.route');
const exPoliceSuperRouter = require('./routes/exPoliceSuper.route');
const visitorCounterRouter = require('./routes/visitorCounter.route');
const importantLinksRouter = require('./routes/importantLinks.route');
const rightOthersRouter = require('./routes/rightSidebarOthers.route');

const menuItemRouter = require('./routes/menuItem.route')
const menuBarRouter = require('./routes/menuBar.route');
const rightSideRouter = require('./routes/rightSide.route');

const footerButtonLinkRouter = require('./routes/footerButtonLinks.route');
const contactRouter = require('./routes/contactAddress.route');
const contactPersonRouter = require('./routes/contactPerson.route');

//all routes
app.use(newsRouter);
app.use(topSliderRouter);
app.use(topBannerRouter);
app.use(bottomNewsRouter);
app.use(recentActivityRouter);
app.use(activitySliderRouter);
app.use(workDocumentSectionRouter);
app.use(workRouter);
app.use(imageGalleryRouter);
app.use(VideoGalleryRouter);
app.use(footerHeadingRouter);
app.use(footerDataRouter);
app.use(zillaPolicePagesRouter);
app.use(zillaPoliceSubPagesRouter);
app.use(administrationSubPagesRouter);
app.use(administrationPagesRouter);
app.use(employeesRouter);
app.use(officersRouter);
app.use(exSpRouter);
app.use(unitsRouter);
app.use(subUnitsRouter);
app.use(forcesRouter);
app.use(activitiesPagesRouter);
app.use(activitiesSubPagesRouter);
app.use(servicesPagesRouter);
app.use(servicesSubPagesRouter);
app.use(noticeRouter);
app.use(bitPoliceRouter);
app.use(thanaRouter);
app.use(bitOfficersRouter);
app.use(phoneDirectoryRouter);
app.use(crimePageRouter);
app.use(policeSuperRouter);
app.use(digRouter);
app.use(authRouter);
app.use(bitNewsRouter);
app.use(rolesRouter);
app.use(footerBrandingRouter);
app.use(emailRouter);
app.use(exForceRouter);
app.use(exPoliceSuperRouter);
app.use(visitorCounterRouter);
app.use(importantLinksRouter);
app.use(rightOthersRouter);

app.use(menuItemRouter);
app.use(menuBarRouter);
app.use(rightSideRouter);

app.use(footerButtonLinkRouter);
app.use(contactRouter);
app.use(contactPersonRouter);


app.use(express.static('public'));

app.listen(process.env.PORT || port, () => {
  console.log(`Police app listening on port ${port}`)
})