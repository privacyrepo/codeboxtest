import type { JobDetails } from './JobList';

export const JOB_LIST_QUERY = `
  query listJobs {
    listJobs {
      data {
        id
        entryId
        title
        slug
        type
        skills
        keywords
        compensation
        location
        applyLink
        featured
        remote
        description
        createdOn
        company {
          name
          logo
        }
      }
    }
    listCompanies {
      data {
        name
        slug
        logo
      }
    }
  }
`;
export const JOB_SLUG_QUERY = `
  query JobSlugs {
    listJobs {
      data {
        slug
      }
    }
  }
`;
export const JOB_BY_SLUG_QUERY = `
  query JobsBySlug($JobGetWhereInput: JobGetWhereInput!) {
    job: getJob(where: $JobGetWhereInput) {
      data {
        id
        title
        slug
        description
        createdOn
        featured

        company {
          name
          slug
          logo
        }
      }
    }
    moreJobs: listJobs(limit: 2, sort: createdOn_ASC) {
      data {
        id
        title
        slug
        description
        createdOn
        featured

        company {
          name
          slug
          logo
        }
      }
    }
  }
`;
export const ADD_JOB = `
   mutation createJob($title:String!,$description:String!){
    createJob(data:{title:$title,description:$description}){
     data {
      id
      title
      description
      createdOn
     }
    }
   }
`;
async function fetchAPI(query: any, { variables }: any = {}) {
  const url = import.meta.env.GRAPHQL_READ_URL;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.WEBINY_API_KEY}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

// async function postAPI(query: any, { variables }: any = {}) {
//   const url = import.meta.env.GRAPHQL_MANAGE_URL;

//   const res = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${import.meta.env.WEBINY_API_KEY}`,
//     },
//     body: JSON.stringify({
//       query,
//       variables,
//     }),
//   });

//   const json = await res.json();

//   if (json.errors) {
//     console.error(json.errors);
//     throw new Error('Failed to fetch API');
//   }

//   return json.data;
// }
export async function getAllJobs() {
  const data = await fetchAPI(JOB_LIST_QUERY);
  return data.listJobs.data;
}

export async function getAllJobsSlug() {
  const data = await fetchAPI(JOB_SLUG_QUERY);
  return data.listJobs.data;
}

export async function getJobBySlug(slug: any) {
  const data = await fetchAPI(JOB_BY_SLUG_QUERY, {
    variables: {
      JobGetWhereInput: {
        slug,
      },
    },
  });

  return data;
}

export async function addJob(data: JobDetails) {
  const response = await fetchAPI(ADD_JOB, {
    variables: {
      title: data.title,
      description: data.description,
    },
  });
  return response.createJob.data;
}

export async function publishJob(jobID: string) {
  const response = await fetchAPI(
    `
   mutation publishJob($id:ID!){
    publishJob(revision:$id){
     data {
      id
      title
      description
     }
    }
   }
  `,
    {
      variables: {
        id: jobID,
      },
    }
  );
  return response.publishJob.data;
}
export async function addCompany(data: any) {
  const response = await fetchAPI(
    `
   mutation createCompany($name:String!,$email:String!){
    createCompany(data:{name:$name,email:$email}){
     data {
      id
      name
      email
      createdOn
     }
    }
   }
  `,
    {
      variables: {
        name: data.name,
        email: data.email,
      },
    }
  );
  return response.createCompany.data;
}

export async function publishCompany(data: any) {
  const response = await fetchAPI(
    `
   mutation publishCompany($id:ID!){
    publishCompany(revision:$id){
     data {
      id
      name
      email
     }
    }
   }
  `,
    {
      variables: {
        id: data.id,
      },
    }
  );
  return response.publishCompany.data;
}
