using System;
using System.Collections.Generic;
using System.Text;
using Emart.AdminService.Models;
using Emart.AdminService.Repositories;
using NUnit.Framework;

namespace Emart.Test
{
    [TestFixture]
   public class TestAdminService
    {
        AdminRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new AdminRepository(new EmartDBContext());
        }
        [Test]
        [Description("Test AddCategory()")]
        public void TestAddCategory()
        {
            _repo.AddCategory(new Category()
            {
                CategoryId="C365",
                CategoryName="HomeAppliances",
                BriefDetails="BestQuality"
            });
            var result = _repo.GetCatById("C365");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test AddSubCategory()")]
        public void TestAddSubCategory()
        {
            _repo.AddSubCategory(new SubCategory()
            {
                SubcategoryId="SC27",
                SubcategoryName="Furniture",
                CategoryId="C365",
                BriefDetails="Best",
                Gst="12"
            });
            var result = _repo.GetSCatById("SC27");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test DeleteCategory")]
        public void TestDeleteCategory()
        {
            _repo.DeleteCategory("C365");
            var result= _repo.GetCatById("C365");
            Assert.Null(result);
        }
        [Test]
        [Description("Test DeleteSubCategory")]
        public void TestDeleteSubCategory()
        {
            _repo.DeleteSubCategory("SC27");
            var result = _repo.GetSCatById("SC27");
            Assert.Null(result);
        }
        [Test]
        [Description("Test UpdateCategory")]
        public void TestUpdateCategory()
        {
            Category c = _repo.GetCatById("C365");
            c.BriefDetails = "BestQuality";
            _repo.UpdateCategory(c);
            Category c1 = _repo.GetCatById("C365");
            Assert.AreSame(c, c1);
        }
        [Test]
        [Description("Test UpdateSubCategory")]
        public void TestUpdateSubCategory()
        {
            SubCategory s = _repo.GetSCatById("SC27");
            s.BriefDetails = "BestQuality";
            _repo.UpdateSubCategory(s);
            SubCategory s1 = _repo.GetSCatById("SC27");
            Assert.AreSame(s, s1);
        }
        [Test]
        [Description("Test GetCatById")]
        public void TestGetCatById()
        {
            var result = _repo.GetCatById("C365");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test GetCatById")]
        public void TestGetSCatById()
        {
            var result = _repo.GetSCatById("SC27");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test GetCategory()")]
        public void TestGetCategory()
        {
            var result = _repo.GetCategory();
            Assert.IsNotNull(result);
            Assert.Greater(result.Count, 0);
        }
        [Test]
        [Description("Test GetSubCategory()")]
        public void TestGetSubCategory()
        {
            var result = _repo.GetSubCategory();
            Assert.IsNotNull(result);
            Assert.Greater(result.Count, 0);
        }
    }
}
