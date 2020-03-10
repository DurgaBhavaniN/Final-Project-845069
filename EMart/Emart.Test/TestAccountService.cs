using System;
using System.Collections.Generic;
using System.Text;
using Emart.AccountService.Models;
using Emart.AccountService.Repositories;
using NUnit.Framework;

namespace Emart.Test
{
    [TestFixture]
    public class TestAccountService
    {
        AccountRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new AccountRepository(new EmartDBContext());
        }
        [Test]
        [Description("Test BuyerRegister()")]
        public void BuyerRegister()
        {
            _repo.BuyerRegister(new Buyer()
            {
                BuyerId = "B4",
                UserName = "sai",
                EmailId = "psai@gmail.com",
                Password = "sai123",
                MobileNo = "9876943234",
                CreatedDateTime = DateTime.Now

            }) ;
            var result = _repo.BuyerLogin("sai", "sai123");
                Assert.IsNotNull(result);      
        }
[Test]
[Description("Test SellerLogin()")]
    public void SellerRegister()
        {
            _repo.SellerRegister(new Seller()
            {
                SellerId = "3",
                UserName = "sowji",
                Password = "sowji123",
                CompanyName = "Wipro",
                Gstin = "13",
                BriefDetails = "SoftwareCompany",
                PostalAddress = "Chennai",
                Website = "www.wipro.com",
                EmailId = "sowji@wipro.com",
                MobileNo = "9876567843"

            });
            var result = _repo.SellerLogin("sowji", "sowji123");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test SellerLogin()")]
            public void SellerLogin()
        {
            var result = _repo.SellerLogin("sowji", "sowji123");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test BuyerLogin()")]
        public void BuyerLogin()
        {
            var result = _repo.BuyerLogin("sai", "sai123");
            Assert.IsNotNull(result);
        }
    }
}
