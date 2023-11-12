
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
exports.getFooterBranding = async (req, res) => {
  const slide = await prisma.Footer_Branding.findFirst({});
  res.json(slide)

}

exports.getSingleFooterBranding = async (req, res) => {
  const slide = await prisma.Footer_Branding.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(slide)
}

exports.saveFooterBranding = async (req, res) => {

  const { company, facebook, youtube, whatsapp, company_link } = req.body;

  try {
    const slide = await prisma.Footer_Branding.create({
      data: {
        company,
        facebook,
        youtube,
        whatsapp, 
        company_link
      },
    });
    res.json(slide);
  } catch (error) {

    res.status(500).json({ error: error.message });
  }

};


exports.updateFooterBranding = async (req, res) => {
  const slideId = Number(req.params.id);
  try {
    const existingFooterBranding = await prisma.Footer_Branding.findUnique({ where: { id: slideId } });

    if (!existingFooterBranding) {
      return res.status(404).json({ error: 'FooterBranding not found' });
    }

    const { company, facebook, youtube, whatsapp, company_link } = req.body;

    // Update slide with new image
    const updatedFooterBranding = await prisma.Footer_Branding.update({
      where: { id: slideId },
      data: {
        company, 
        facebook, 
        youtube, 
        whatsapp, 
        company_link
      },
    });
    res.json(updatedFooterBranding);


  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteFooterBranding = async (req, res) => {
  const slide = await prisma.Footer_Branding.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  res.json(slide)
}
