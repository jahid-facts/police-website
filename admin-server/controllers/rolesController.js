
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
exports.getRoles = async (req, res) => {
  const role = await prisma.Role.findMany({});
  res.json(role)

}



exports.getSingleRoles = async (req, res) => {
  const role = await prisma.Role.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(role)
}

exports.saveRoles = async (req, res) => {
  const { home_page,
    work_section,
    footer_section,
    zilla_police,
    administration,
    units,
    activity,
    crime_management,
    service,
    notice_board,
    bit_policing,
    phone_directory,
    role, user } = req.body;
  try {
    const roles = await prisma.Role.create({
      data: {
        home_page: home_page.toString(),
        work_section:'',
        footer_section: '',
        zilla_police: '',
        administration: administration.toString(),
        units: '',
        activity: '',
        crime_management: '',
        service: service.toString(),
        notice_board: '',
        bit_policing: '',
        phone_directory: '',
        user: user.toString(),
        role,
      },
    });
    res.json(roles);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error:error.message });
  }
};


exports.updateRoles = async (req, res) => {
  const roleId = Number(req.params.id);
  try {
    const existingRoles = await prisma.Role.findUnique({ where: { id: roleId } });

    if (!existingRoles) {
      return res.status(404).json({ error: 'Roles not found' });
    }
    // Update role with new image
    const { home_page,
      work_section,
      footer_section,
      zilla_police,
      administration,
      units,
      activity,
      crime_management,
      service,
      notice_board,
      bit_policing,
      phone_directory,
      user,
      role, } = req.body;
    const updatedRoles = await prisma.Role.update({
      where: { id: roleId },
      data: {
        home_page: home_page.toString(),
        work_section: work_section.toString(),
        footer_section: footer_section.toString(),
        zilla_police: zilla_police.toString(),
        administration: administration.toString(),
        units: units.toString(),
        activity: activity.toString(),
        crime_management: crime_management.toString(),
        service: service.toString(),
        notice_board: notice_board.toString(),
        bit_policing: bit_policing.toString(),
        phone_directory: phone_directory.toString(),
        user: user.toString(),
        role,
      },
    });
    res.json(updatedRoles);


  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteRoles = async (req, res) => {
  const role = await prisma.Role.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  res.json(role)
}
