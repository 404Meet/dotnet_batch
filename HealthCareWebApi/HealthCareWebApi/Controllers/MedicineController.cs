using HealthCareWebApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;

namespace HealthCareWebApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MedicineController : ControllerBase
    {

        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public MedicineController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }


        [HttpGet(Name = "GetMedicine")]
        public JsonResult Get()
        {
            string query = @"
                            select MedicineId, MedicineName,Category,
                            ExpiryPeriod, Price, Description, PhotoFileName
                            from
                            dbo.Medicines
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpPost(Name = "PostMedicine")]
        public JsonResult Post(Medicine emp)
        {
            string query = @"
                           insert into dbo.Medicines
                           (MedicineName,Category,ExpiryPeriod,Price,Description,PhotoFileName)
                    values (@MedicineName,@Category,@ExpiryPeriod,@Price,@Description,@PhotoFileName)
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@MedicineName", emp.MedicineName);
                    myCommand.Parameters.AddWithValue("@Category", emp.Category);
                    myCommand.Parameters.AddWithValue("@ExpiryPeriod", emp.ExpiryPeriod);
                    myCommand.Parameters.AddWithValue("@Price", emp.Price);
                    myCommand.Parameters.AddWithValue("@Description", emp.Description);
                    myCommand.Parameters.AddWithValue("@PhotoFileName", emp.PhotoFileName);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }


        [HttpPut(Name = "UpdateMedicine")]
        public JsonResult Put(Medicine emp)
        {
            string query = @"
                           update dbo.Medicines
                           set MedicineName= @MedicineName,
                            Category=@Category,
                            ExpiryPeriod=@ExpiryPeriod,
                            Price=@Price,
                            Description=@Description,
                            PhotoFileName=@PhotoFileName
                            where MedicineId=@MedicineId
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@MedicineId", emp.MedicineId);
                    myCommand.Parameters.AddWithValue("@MedicineName", emp.MedicineName);
                    myCommand.Parameters.AddWithValue("@Category", emp.Category);
                    myCommand.Parameters.AddWithValue("@ExpiryPeriod", emp.ExpiryPeriod);
                    myCommand.Parameters.AddWithValue("@Price", emp.Price);
                    myCommand.Parameters.AddWithValue("@Description", emp.Description);
                    myCommand.Parameters.AddWithValue("@PhotoFileName", emp.PhotoFileName);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{id}", Name = "DeleteMedicine")]
        public JsonResult Delete(int id)
        {
            string query = @"
                           delete from dbo.Medicines
                            where MedicineId=@MedicineId
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@MedicineId", id);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }


        //[Route("SaveFile")]
        //[HttpPost]
        //public JsonResult SaveFile()
        //{
        //    try
        //    {
        //        var httpRequest = Request.Form;
        //        var postedFile = httpRequest.Files[0];
        //        string filename = postedFile.FileName;
        //        var physicalPath = _env.ContentRootPath + "/Photos/" + filename;

        //        using (var stream = new FileStream(physicalPath, FileMode.Create))
        //        {
        //            postedFile.CopyTo(stream);
        //        }

        //        return new JsonResult(filename);
        //    }
        //    catch (Exception)
        //    {

        //        return new JsonResult("anonymous.png");
        //    }
        //}
    }
}
