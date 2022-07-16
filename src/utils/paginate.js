const paginate = async (query, req) => {
  let {perPage, page} = req.query;

  perPage = perPage ? parseInt(perPage) : 15;
  page = page ? parseInt(page) : 1;

  if (page <= 0) {
    throw new Error(
        'Invalid parameter: page must be >= 1.',
    );
  }

  if (perPage <= 0) {
    throw new Error(
        'Invalid parameter: perPage must be >= 1.',
    );
  }

  req.query.perPage = perPage;

  let offset = page || 1;
  offset = offset - 1;
  offset = offset * perPage;

  const rows = await query;
  const paginatedList = await query.limit(perPage).offset(offset);

  let lastPage = rows.length / perPage;
  lastPage = Math.ceil(lastPage);

  const paginationInfo = getPaginationUrl(req, page, lastPage);

  return {
    data: paginatedList,
    ...paginationInfo,
  };
};

const getPaginationUrl = (req, page, lastPage) => {
  const {protocol, baseUrl} = req;
  const {perPage} = req.query;

  const nextPage = page < lastPage ? page + 1 : null;
  const prevPage = page - 1 || null;

  const url = `${protocol}://${req.headers.host}${baseUrl}`;
  const path = req.route.path;

  return {
    nextPage,
    prevPage,
    nextPageUrl: `${url}${path}?perPage=${perPage}&page=${nextPage}`,
    prevPageUrl: `${url}${path}?perPage=${perPage}&page=${prevPage}`,
    firstPageUrl: `${url}${path}?perPage=${perPage}&page=1`,
    lastPageUrl: `${url}${path}?perPage=${perPage}&page=${lastPage}`,
  };
};

module.exports = paginate;
