using System;
using System.Collections.Generic;
using System.Text;
using Emart.SellerService.Models;
using Emart.SellerService.Repositories;
using Emart.SellerService.Repository;
using NUnit.Framework;
namespace Emart.Test
{
    [TestFixture]
    public class TestSellerService
    {
        SellerRepository _repo;
        IItemRepository _repo1;
        [SetUp]
        public void SetUp()
        {
            _repo = new SellerRepository(new EmartDBContext());
            _repo1 = new ItemRepository(new EmartDBContext());
        }
        [Test]
        [Description("Test GetProfile()")]
        public void TestGetProfile()
        {
            var result = _repo.GetProfile("3");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test EditProfile()")]
        public void TestEditProfile()
        {
            Seller s = _repo.GetProfile("3");
            s.Gstin = "14";
            _repo.EditProfile(s);
            Seller s1 = _repo.GetProfile("3");
            Assert.AreSame(s, s1);
        }
    [Test]
    [Description("Test AddItem()")]
    public void TestAddItem()
        {
            _repo1.AddItem(new Items()
            {
                SellerId="2",
                ItemId="I98",
                CategoryId="C63",
                SubcategoryId="SC26",
                Price="14000",
                ItemName="LG",
                Description="more lifetime",
                StockNumber="3",
                Remarks="1",
                Image="headset.jpg"
            });
            var result = _repo1.GetItem("I98");
            Assert.NotNull(result);
        }
        [Test]
        [Description("Test GetItem()")]
        public void TestGetItem()
        {
            var result = _repo1.GetItem("I98");
            Assert.NotNull(result);
        }
        [Test]
        [Description("Test UpdateItem()")]
        public void TestUpdateItem()
        {
            Items i = _repo1.GetItem("I98");
            i.Description = "High Battery";
            Items i1 = _repo1.GetItem("I98");
            Assert.AreSame(i, i1);
        }
        [Test]
        [Description("Test DeleteItem()")]
        public void TestDeleteItem()
        {
            _repo1.DeleteItem("I98");
            var result = _repo1.GetItem("I98");
            Assert.Null(result);
        }
        [Test]
        [Description("Test ViewItems()")]
        public void TestViewItems()
        {
            var result = _repo1.ViewItems();
            Assert.IsNotNull(result);
            Assert.Greater(result.Count, 0);
        }
        
    }

}
