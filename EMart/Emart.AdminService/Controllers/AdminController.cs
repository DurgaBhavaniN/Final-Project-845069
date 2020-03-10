using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AdminService.Models;
using Emart.AdminService.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Emart.AdminService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminRepository _iadmrepo;
        public AdminController(IAdminRepository iitemrepo)
        {
            _iadmrepo = iitemrepo;
        }

        [HttpPost]
        [Route("AddCategory")]
        public IActionResult AddCategory(Category obj)
        {
            try
            {
                _iadmrepo.AddCategory(obj);
                return Ok();
            }

            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("AddSubCategory")]
        public IActionResult AddSubCategory(SubCategory obj)
        {
            try
            {
                _iadmrepo.AddSubCategory(obj);
                return Ok();
            }

            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteCategory/{cid}")]
        public IActionResult DeleteCategory(string cid)
        {
            try
            {
                _iadmrepo.DeleteCategory(cid);
                return Ok();
            }

            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteSubCategory/{subid}")]
        public IActionResult DeleteSubCategory(string subid)
        {
            try
            {
                _iadmrepo.DeleteSubCategory(subid);
                return Ok();
            }

            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("GetCategory")]
        public IActionResult GetCategory()
        {
            try
            {
                
                return Ok(_iadmrepo.GetCategory());
            }
            catch(Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetSubCategory")]
        public IActionResult GetSubCategory()
        {
            try
            {
                _iadmrepo.GetSubCategory();
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("ViewCategories")]
        public IActionResult ViewCategories()
        {
            try
            {

                return Ok(_iadmrepo.ViewCategories());
            }

            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("ViewSubcategories")]
        public IActionResult ViewSubcategories()
        {
            try
            {

                return Ok(_iadmrepo.ViewSubcategories());
            }

            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetCatById/{categoryId}")]
        public IActionResult GetCatById(string categoryId)
        {
            try
            {

                return Ok(_iadmrepo.GetCatById(categoryId));
            }

            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }

        }
        [HttpGet]
        [Route("GetSCatById/{SubcategoryId}")]
        public IActionResult GetSCatById(string SubcategoryId)
        {
            try
            {

                return Ok(_iadmrepo.GetSCatById(SubcategoryId));
            }

            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }

        }
        [HttpPut]
        [Route("UpdateCategory")]
        public IActionResult UpdateCategory(Category iobj)
        {
            try
            {
                _iadmrepo.UpdateCategory(iobj);
                return Ok();
            }

            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpPut]
        [Route("UpdateSubCategory")]
        public IActionResult UpdateSubCategory(SubCategory iobj)
        {
            try
            {
                _iadmrepo.UpdateSubCategory(iobj);
                return Ok();
            }

            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

    }
}
